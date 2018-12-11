export interface IAppState{
    subjects:any[];
}

export const INITIAL_STATE :IAppState = {
    subjects:[]
}
export function rootReducer(state:IAppState,action):IAppState{
  switch(action.type){
      case 'ADD_SUBJECTS':
        var newSubjects = action.subjects;
        return {subjects:[newSubjects]};  
  }  
  return state; 
}