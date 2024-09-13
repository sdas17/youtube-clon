const GOOGLE_API_KEY="AIzaSyCivCCxZuj2Wth7G53XgkODG4SiAroVkjQ"
// export const youtube_video_url ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key='+api_key
// export const GOOGLE_API_KEY = "AIzaSyDYDj8HiIJtcwepyJBESow6i0F_-qoWex0";

export const YOUTUBE_POPULAR_VIDEOS =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  //youtube search api search api 
  export const youtube_Search_Api="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const offset_livechat=10
  //live chat ==>>>>>>> infinite scroll ==>>>>>>>>>>>>>>>>>pagination


  export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;