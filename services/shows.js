function getShowDetails(show) {
  const details = {
    image: null,
    slug: null,
    title: null
  }

  if(show.hasOwnProperty('image') && show.image.hasOwnProperty('showImage')) {
    details.image = show.image.showImage;
  }
  if(show.hasOwnProperty('slug')) details.slug = show.slug;
  if(show.hasOwnProperty('title')) details.title = show.title;

  return details;
}

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

module.exports = {
  filterShows,
  getShowDetails
};