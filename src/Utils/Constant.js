const GOOGLE_API_KEY="AIzaSyCivCCxZuj2Wth7G53XgkODG4SiAroVkjQ"
// export const youtube_video_url ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key='+api_key
// export const GOOGLE_API_KEY = "AIzaSyDYDj8HiIJtcwepyJBESow6i0F_-qoWex0";

export const YOUTUBE_POPULAR_VIDEOS =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  //youtube search api search api 
  export const youtube_Search_Api="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Dev"