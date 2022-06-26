import * as api from '../api';

export const readTodos = async function(){
  try {
    const {data} = await api.readTodos();
    return data;
  }
  catch (err) {
      console.log(err);
  }
}

export const createTodos = async function(todo){
  try {
    const {data} = await api.createTodos(todo);
    return data;
  }
  catch (err) {
      console.log(err);
  }
}