const apiUri = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODNiNDEwMDJmYzZjMGY2NTRiOTMyZWY3NzdkYzQ3NSIsInN1YiI6IjY1YzM4M2I0OGMwYTQ4MDE4NDg2NWFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x01EnkKAVluQ3tZ1S15CtGbugkaBgsddoZxYsZV8dwQ'
    }
};

fetch(apiUri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
export { apiUri, options }