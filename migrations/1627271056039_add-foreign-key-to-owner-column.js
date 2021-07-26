/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // membuat user baru.
  pgm.sql(
    "INSERT INTO users(id, username, password, fullname) VALUES ('old_songs', 'old_songs', 'old_songs', 'old_songs')",
  );

  // mengubah nilai owner pada note yang owner-nya bernilai NULL
  pgm.sql("UPDATE songs SET owner = 'old_songs' WHERE owner = NULL");

  // memberikan constraint foreign key pada owner terhadap kolom id dari tabel users
  pgm.addConstraint(
    'songs',
    'fk_songs.owner_users.id',
    'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE',
  );
};

exports.down = (pgm) => {
  // menghapus constraint fk_notes.owner_users.id pada tabel notes
  pgm.dropConstraint('songs', 'fk_songs.owner_users.id');

  // mengubah nilai owner old_notes pada note menjadi NULL
  pgm.sql("UPDATE songs SET owner = NULL WHERE owner = 'old_songs'");

  // menghapus user baru.
  pgm.sql("DELETE FROM users WHERE id = 'old_songs'");
};
