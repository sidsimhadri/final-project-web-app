import axios from 'axios';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USER_API = `${SERVER_API_URL}/users`;
const TAGS_API = `${SERVER_API_URL}/tags`;
const REVIEWS_API = `${SERVER_API_URL}/reviews`;
const SPOTIFY_API = `${SERVER_API_URL}/spotify`;

export const follow = async (uid, fid) => {
  const response = await axios.put(`${USER_API}/follow/${uid}/${fid}`)
  return response.data;
}
export const unfollow = async (uid, fid) => {
  const response = await axios.put(`${USER_API}/unfollow/${uid}/${fid}`)
  return response.data;
}

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user)
  return response.data;
}

export const findUser = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}`)
  const users = response.data;
  return users;
}

export const deleteUser = async (uid) => {
  const response = await axios
    .delete(`${USER_API}/${uid}`)
  return response.data
}

export const updateUser = async (user) => {
  const response = await axios
    .put(`${USER_API}/${user._id}`, user);
  return user;
}

export const createReview = async (review) => {
  const response = await axios.post(REVIEWS_API, review)
  return response.data;
}


export const findReview = async (rid) => {
  let response = ""
  if (rid === undefined) {
    response = await axios.get(`${REVIEWS_API}`)
  }
  else {
    response = await axios.get(`${REVIEWS_API}/${rid}`)
  }
  const reviews = response.data;
  return reviews;
}

export const findReviewsByUserId = async (uid) => {
  let response = ""
  if (uid === undefined) {
    response = await axios.get(`${REVIEWS_API}`)
  }
  else {
    response = await axios.get(`${REVIEWS_API}/user/${uid}`)
  }
  const reviews = response.data;
  return reviews;
}

export const findReviewsByTagId = async (tid) => {
  let response = ""
  if (tid === undefined) {
    response = await axios.get(`${REVIEWS_API}`)
  }
  else {
    response = await axios.get(`${REVIEWS_API}/tags/${tid}`)
  }
  const reviews = response.data;
  return reviews;
}

export const findReviewsByAlbumId = async (aid) => {
  let response = ""
  if (aid !== undefined) {
    response = await axios.get(`${REVIEWS_API}/album/${aid}`)
  }
  if (response === "") {
      return [{
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "name": "" },
        ],
    }]
  }
  const reviews = response.data;
  return reviews;
}
export const findReviewByBody = async (search) => {
 const response = await axios.get(`${REVIEWS_API}/body/${search}`)
 const reviews = response.data;
 return reviews;
}

export const deleteReview = async (rid) => {
  const response = await axios
    .delete(`${REVIEWS_API}/${rid}`)
  return response.data
}

export const updateReview = async (review) => {
  const response = await axios
    .put(`${REVIEWS_API}/${review._id}`, review);
  return review;
}

export const createTag = async (tag) => {
  const response = await axios.post(TAGS_API, tag)
  return response.data;
}

export const findTag = async (tid) => {
  let response = ""
  if (tid === undefined) {
    response = await axios.get(`${TAGS_API}`)
  }
  else {
    response = await axios.get(`${TAGS_API}/${tid}`)
  }
  const tags = response.data;
  return tags;
}

export const findTagByName = async (name) => {
  let response = ""
  if (name === undefined) {
    response = await axios.get(`${TAGS_API}`)
  }
  else {
    response = await axios.get(`${TAGS_API}/name/${name}`)
  }
  const tags = response.data;
  return tags;
} 

export const findAlbum = async (aid) => {
  const response = await axios.get(`${SPOTIFY_API}/album/${aid}`)
  const album = response.data;
  return album;
}

export const findArtistAlbums = async (artistId) => {
  const response = await axios.get(`${SPOTIFY_API}/albums/${artistId}`)
  const albums = response.data;
  return albums;
}

export const findNewreleases = async () => {
  const response = await axios.get(SPOTIFY_API + "/newreleases");
  const newreleases = response.data;
  return newreleases;
}


export const findSearchResults = async (textInput) => {
  const response = await axios.get(SPOTIFY_API + "/search", textInput);
  const results = response.data;
  return results;
}

export const searchArtists = async (textInput) => {
 const response = await axios.get(SPOTIFY_API + "/searchArtists/", textInput);
 const results = response.data;
 return results;
}

export const searchAlbums = async (textInput) => {
   const response = await axios.get(`${SPOTIFY_API}/searchAlbums/${textInput}`)
  const results = response.data;
 return results;
}

export const findPlaylist = async (pid) => {
  const response = await axios.get(`${SPOTIFY_API}/playlist/${pid}`)
  const playlist = response.data;
  return playlist;
}


