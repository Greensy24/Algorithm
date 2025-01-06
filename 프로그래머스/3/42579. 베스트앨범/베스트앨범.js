function solution(genres, plays) {
    const genreMap = new Map();

    genres.forEach((genre, index) => {
        if (!genreMap.has(genre)) {
            genreMap.set(genre, { totalPlays: 0, songs: [] });
        }
        const genreInfo = genreMap.get(genre);
        genreInfo.totalPlays += plays[index];
        genreInfo.songs.push({ id: index, plays: plays[index] });
    });

    const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);

    const bestAlbum = [];

    for (const [genre, { songs }] of sortedGenres) {
        const sortedSongs = songs.sort((a, b) => {
            if (b.plays === a.plays) {
                return a.id - b.id;
            }
            return b.plays - a.plays;
        });

        bestAlbum.push(sortedSongs[0].id);
        if (sortedSongs.length > 1) {
            bestAlbum.push(sortedSongs[1].id);
        }
    }

    return bestAlbum;
}