import '../css/Loader.css'
function Loader() {
    return (
      <div className="fixed flex justify-center items-center w-full h-full top-0 bg-mask overflow-auto">
        <div class="lds-dual-ring"></div>
      </div>
      
    );
  }
  
  export default Loader;
  