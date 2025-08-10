export const GOOGLE_API_KEY = "AIzaSyDiq5rNTUdvZEnErM8ElAWLHC5GRStLFoE";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key=${GOOGLE_API_KEY}`;

export const EXPLORE_SIDEBAR = [
  {
    iconLink:
      "https://icon-library.com/images/trending-icon/trending-icon-2.jpg",
    name: "Trending",
    id: 1,
  },
  {
    iconLink: "https://cdn-icons-png.freepik.com/512/6397/6397721.png",
    name: "Shopping",
    id: 2,
  },
  {
    iconLink:
      "https://cdn-icons-png.freepik.com/256/972/972562.png?semt=ais_incoming",
    name: "Music",
    id: 3,
  },
  {
    iconLink:
      "https://cdn0.iconfinder.com/data/icons/thin-movies/57/thin-390_music_video_play_youtube-512.png",
    name: "Films",
    id: 4,
  },
  {
    iconLink:
      "https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/gaming/youtube-gaming-kbrba2fokdf61s2d2z0cny.png/youtube-gaming-9i2w0sv8n9hob9k5jk998r.png?_a=DATAdtAAZAA0",
    name: "Gaming",
    id: 5,
  },
];
