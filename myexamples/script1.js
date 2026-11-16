'use strict';

async function ana(hoa) {
  try {
  const response = await fetch(`www.ana/${encodeURIComponent(hoa)}`);
  if (!response.ok) {
    throw new Error('some:' + response.status)
  }
  const data = await response.json()
  return data
  }
  catch (error) {
    console.log("some", error)
  }
}

document.querySelector('.hua').addEventListener('submit', async (e) => {
  e.preventDefault
  ana(queueMicrotask.value)
})