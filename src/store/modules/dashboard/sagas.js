import { takeLatest, call, put, all } from 'redux-saga/effects';
import { formatDistance, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  postPostSuccess,
  postPostFailure,
  getPostsSuccess,
  getPostsFailure,
  deletePostSuccess,
  updatePostSuccess,
} from './actions';

export function* getPosts({ payload }) {
  try {
    const { page = 1, limit = 10 } = payload.query;

    const response = yield call(api.get, `posts?page=${page}&limit=${limit}`);

    const rawPosts = response.data.posts;
    const { pagination_info } = response.data;
    const formattedPosts = rawPosts.map((post) => {
      const formattedRealDate = post.real_date
        ? formatDistance(
            parseISO(post.real_date),
            new Date(),
            {
              addSuffix: true,
              locale: pt,
            },
            new Date()
          )
        : 'Um dia muito especial';

      return {
        ...post,
        subtitle: post.subtitle ? post.subtitle : 'Num lugar aí...',
        formattedRealDate,
        ISODate: format(parseISO(post.real_date), "yyyy-MM-dd'T'HH:mm"),
      };
    });
    const final_posts = { posts: formattedPosts, pagination_info };
    // toast.success('Feed carregado com sucesso.');
    yield put(getPostsSuccess(final_posts));
  } catch (err) {
    toast.error('Erro ao carregar o feed.');

    yield put(getPostsFailure());
  }
}

export function* postPost({ payload }) {
  try {
    const { title, subtitle, file, real_date } = payload.data;

    if (file.size >= 1024 * 1024 * 10) {
      toast.error('Foto deve ser menor que 10MB');
      yield put(postPostFailure());
      return;
    }
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      toast.error('Formato inválido, use jpg, png, jpeg');
      yield put(postPostFailure());
      return;
    }

    const data = new FormData();
    if (file) data.append('file', file);
    if (title) data.append('title', title);
    if (subtitle) data.append('subtitle', subtitle);
    if (real_date) data.append('real_date', real_date);

    const response = yield call(api.post, 'posts', data);

    yield put(postPostSuccess(response.data.dashboard));

    window.location.reload();
    // toast.success('Post realizado com sucesso!');
  } catch (err) {
    toast.error('Erro ao postar.');

    yield put(postPostFailure());
  }
}

export function* deletePost({ payload }) {
  try {
    const { post_id } = payload;

    const response = yield call(api.delete, `posts/${post_id}`);

    yield put(deletePostSuccess(response.data));

    // toast.success('Post deletado com sucesso!');
    window.location.reload();
  } catch (err) {
    toast.error('Erro ao deletar post.');

    // yield put(deletePostFailure());
  }
}

export function* updatePost({ payload }) {
  try {
    const { id, title, subtitle, real_date } = payload.data;
    const data = new FormData();
    if (title) data.append('title', title);
    if (subtitle) data.append('subtitle', subtitle);
    if (real_date) data.append('real_date', real_date);

    const response = yield call(api.put, `posts/${id}`, {
      title,
      subtitle,
      real_date,
    });
    yield put(updatePostSuccess(response.data.dashboard));

    window.location.reload();
    // toast.success('Post realizado com sucesso!');
  } catch (err) {
    toast.error('Erro ao editar o post.');

    // yield put(updatePostFailure());
  }
}

export function resetPage() {
  try {
    window.scrollTo(0, 0);
  } catch (err) {
    toast.error('Erro.');
  }
}
export default all([
  takeLatest('@dashboard/GET_POSTS_REQUEST', getPosts),
  takeLatest('@dashboard/POST_POST_REQUEST', postPost),
  takeLatest('@dashboard/CLEAN_POSTS_REQUEST', resetPage),
  takeLatest('@dashboard/DELETE_POSTS_REQUEST', deletePost),
  takeLatest('@dashboard/UPDATE_POST_REQUEST', updatePost),
]);
