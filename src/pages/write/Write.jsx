import "./write.css";

export const Write = () => {
  return (
        <div className="write">
              <img className="writeImg" src="/image/write.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            className=" writeInput eriteText"
            placeholder="Tell Your Story..."
            type="text"
          ></textarea>
                    </div>
                    
          <button className="writeSubmit">Publish</button>





      </form>
    </div>
  );
};
