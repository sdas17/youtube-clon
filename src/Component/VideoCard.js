
const VideoCard = ({info}) => {
  console.log(info);
  
    const {snippet,statistics}=info
    const {channelTitle,thumbnails,title}=snippet
  return (
    <div className="p-2 m-2 w-72  shadow-lg">
        <img  className="rounded-lg" src={thumbnails.medium.url} alt="youtube"></img>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}s</li>
            <li>{statistics.viewCount } views </li>
        </ul>
    </div>
  )
}

export const  AdvCard = ({info})=>{
  
  const advertisement = {
    title: "Sponsored Ad",
    content: "Discover amazing deals and offers just for you!",
    imageUrl: "data:image/jpeg;base64,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"
  };
  return (
    <>
    <div className="p-1 m-1 border border-red-900">
    <VideoCard info={info} />
   {/* <div >
          <h3 className="text-lg font-bold">{advertisement.title}</h3>
          <p className="mt-2">{advertisement.content}</p>
          {advertisement.imageUrl && (
            <img
              src={advertisement.imageUrl}
              alt="Advertisement"
              className="mt-2 w-full h-auto rounded"
            />
          )}
        </div>  */}
       
    </div>
    </>
  )
}
export default VideoCard