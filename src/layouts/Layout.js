import { useSelector, useDispatch } from "react-redux";
import { resetForm, toggleForm } from "../actions/action";
import Overlay from "./Overlay";
import CreateJob from '../components/CreateJob';

function Layout({ children }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
const overlay = state.isToggle ? <Overlay><CreateJob/></Overlay> : ''

  return (
    <div className="fixed w-full top-0">
    <div className="nav h-14 top-0 bg-headerNav justify-end flex items-center">
      <button onClick={() => { dispatch(toggleForm()); dispatch(resetForm())}} className="flex bg-primary text-white px-4 py-2 mr-4 font-medium rounded-lg">
        Create Job
      </button>
    </div>
    {overlay}
    </div>
  );
}

export default Layout;
