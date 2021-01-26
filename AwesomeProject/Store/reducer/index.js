

const INITIAL_STATE = {
    data: [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1st Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '5864a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '-3da1-471f-bd96-145571e29d72',
        title: '4th Item',
      },
      {
        id: '-3da1-471f-145571e29d72',
        title: '5th Item',
      },
      {
        id: '-3d-471f-145571e29d72',
        title: '6th Item',
      },
      {
        id: '-3d-471f-145e29d72',
        title: '7th Item',
      },
      {
        id: '-3d-471f-1e29d72',
        title: '8th Item',
      },],
}

export default (state = INITIAL_STATE) =>{
    // console.log("ACTION", action)
    // switch(action.type){
    //     case "SETDATA" :
    //         return({
    //             ...state,
    //             user : action.data
    //         })
    // }
    return state;
}