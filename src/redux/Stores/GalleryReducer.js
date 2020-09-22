
  
export const addAlbum = (payload) => ({
  type: 'ADD_ALBUM', 
  payload
});
  
export const loadAlbum = (payload) => ({
  type: 'LOAD_ALBUM', 
  payload
});
  
export const loadSpecificAlbum = (payload) => ({
  type: 'LOAD_SPECIFIC_ALBUM', 
  payload
});

export const deleteAlbum = (payload) => ({
  type: 'DELETE_ALBUM', 
  payload
});
export const updateAlbum = (payload) => ({
  type: 'UPDATE_ALBUM', 
  payload
});
  
let albums = [
],albumnumber;
let counterToActiviateLoadDataOnce = 0 ;

  
const galleryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ALBUM':
        let album = action.payload.image;
        let albumsize = action.payload.imagesize;
        albumnumber = action.payload.albumnumber.toString();
        let date = action.payload.date;


        
        return (Object.assign({},state,{
          albums:[...state.albums,{album,albumsize,albumnumber,date}],
          showalbums:[...state.showalbums,{album,albumsize,albumnumber,date}]}));

    case 'LOAD_SPECIFIC_ALBUM':
        albumnumber=action.payload.albumnumber;
        
        if (state.albums.length===0) return (Object.assign({},state));
        
        state.showalbums = state.albums.filter((image)=>{
            return image.albumnumber===albumnumber 
        })
        
        return (Object.assign({},state,{showalbums:state.showalbums}))
    case 'UPDATE_ALBUM':
        console.log('chay')
        if (state.showalbums.length===0) return (Object.assign({},state));

        let actiontoupdatealbum=action.payload.action;
        let selectimage=action.payload.selectimages;
        albumnumber=action.payload.albumnumber;
        state.showalbums = state.albums.filter((image)=>{
          return image.albumnumber===albumnumber 
        })
        console.log('chay')
        switch (actiontoupdatealbum){
          case 'delete':
            state.showalbums[0].album = state.showalbums[0].album.filter((image)=>{
              
              return !selectimage.includes(image) 
            })
            break;
          case 'add':
            let addimage=action.payload.addimage;
            
            state.showalbums[0].album.push.apply(state.showalbums[0].album,addimage)
            break;
        default:
          break;
        }
        console.log(state.showalbums)
        return (Object.assign({},state,{showalbums:state.showalbums}));
    case 'DELETE_ALBUM':
        
        state.albums.splice(action.payload.image, 1);
        return (Object.assign({},state,{showalbums:state.showalbums}));
    case 'LOAD_ALBUM':
        counterToActiviateLoadDataOnce ++;
        
        if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{albums:albums,showalbums:albums}))
        
        return (Object.assign({},state))
      
    default:
      return state;
    }
};
  
export default galleryReducer;
  
