function filterShows(showList) {
  let data = {
    response: []
  };

  for(let i = 0; i < showList.length; i++) {
    const currentShow = showList[i];
    
    if(currentShow.drm && currentShow.episodeCount > 0) {
      const showDetails = {
        image: currentShow.image.showImage,
        slug: currentShow.slug,
        title: currentShow.title
      }
  
      data.response.push(showDetails);
    }
  }
  
  return data;
} 
module.exports.filterShows = filterShows;

function getShows(req, res) {

}
module.exports.getShows = getShows;