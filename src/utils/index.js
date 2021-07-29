const mapList = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

const getAllPlaylists = ({
  id,
  name,
  username,
}) => ({
  id,
  name,
  username,
});

const getPlaylistSongs = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapList, getAllPlaylists, getPlaylistSongs };
