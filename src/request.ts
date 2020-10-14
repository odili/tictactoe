export const nextMove = async (play) => {
  try {
    const res = await fetch(`${process.env.apiUrl}/next-turn/${play}`)
    const message = await res.json();
    
    return message.errorMessage;
  } catch (e) {
    console.log(e, 'Error connection to server');
    return;
  }
}

export async function  newGame(){
  try {
    await fetch(`${process.env.apiUrl}/reset`)
  } catch (e) {
    console.log(e, 'Error connection to server');
    return
  }
}