
const loadKeyInList = (list) => {

    for(let i=0; i < list.length; i++){

        list[i].key = i+1
    }

    return list;
}

const isEmptyObject = (obj) =>{
	for (var key in obj) {
    	if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
    	}
	}
	return true;
}

const isContainUndefined = (object) => {

    for(var key in object){
        if(typeof(object[key]) == 'undefined') return true
    }
    return false
}

const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
}

const addElementToLocalStorage = (key ,element) => {

	let newElements;

	let currElements = JSON.parse(localStorage.getItem(key));

	if(!currElements){
		newElements = JSON.stringify([element]);
	}
	else{
		newElements = JSON.stringify([...currElements, element]);
	}

	localStorage.setItem(key, newElements);
}

const editElementFromLocalStorage = (key, index, patch) => {

	let currElements = JSON.parse(localStorage.getItem(key));
	currElements[index] = patch;
	localStorage.setItem(key, JSON.stringify(currElements));
}

const removelementFromLocalStorage = (key, index) => {

	let currElements = JSON.parse(localStorage.getItem(key));
	delete currElements[index];
	let uElement = currElements.filter((e) => e!== null)
	localStorage.setItem(key, JSON.stringify(uElement));
}
  

export {
    loadKeyInList, isEmptyObject, isContainUndefined, areObjectsEqual, addElementToLocalStorage, editElementFromLocalStorage, removelementFromLocalStorage
}