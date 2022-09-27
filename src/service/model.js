import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onValue, get} from "firebase/database";
import { database } from "./firebase";

const projectsRef = ref(database, 'projects');
const technologiesRef = ref(database, "technologies");

export function logout(){
    const auth = getAuth();
    auth.signOut();
    window.location.replace("/");
}

export function hideTag(id){
    document.getElementById(id).classList.add('hide');
}
  
export function appearTag(id){
    document.getElementById(id).classList.remove('hide');
}

export function hasHide(id){
    return document.getElementById(id).classList.contains('hide');
}

export function openOrHide(id){
    console.log(id);
    if(hasHide(id)){
        appearTag(id);
        return;
    }
    hideTag(id);
}

export function getInputValue(id){
    return  document.getElementById(id).value;
}

export function getTechnologiesList(setList){
    get(technologiesRef).then((snapshot) =>{
        setList(snapshot.val());
    });
}

export function getProjectsList(setProjectList){
    get(projectsRef).then((snapshot) => {
        let list = [];
        snapshot.forEach((child) => {
            list.push(child.val());
        });
        setProjectList(list);
    });
}

export function getProjectById(id, setProject){
    const projectIdRef = ref(database, 'projects/' + id);
    get(projectIdRef).then((snapshot) => {
        setProject(snapshot.val());
    });
}

export function leftOrRight(position){
    if(position % 2 == 0){
        return "Right";
    }
    return "Left";
}

export function setTextToHTML(text){
    let result = text.split('\\n');
    return result;
}

export function getTexts(project,setTexts){
    setTexts(setTextToHTML(project.text));
}

export default {
    logout, openOrHide, getInputValue, setTextToHTML,
    getTechnologiesList, leftOrRight, getProjectsList,
    getProjectById
};