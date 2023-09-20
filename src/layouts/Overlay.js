function Overlay({ clickHandler, children }) {
  return (
    <div className="overlay absolute flex justify-center items-center w-full h-screen top-0 bg-mask overflow-auto">
      {/* <button onClick={clickHandler()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-20 right-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
      {children}
    </div>
  );
}

export default Overlay;
