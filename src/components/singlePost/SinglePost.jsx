import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/image/image.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Hello World
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Nitish Kumar</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in
          animi vel perspiciatis placeat velit sunt consectetur, non rerum
          consequuntur eos labore explicabo accusantium error qui est cupiditate
          illo temporibus nemo aliquid, dolorem adipisci? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorum in animi vel perspiciatis
          placeat velit sunt consectetur, non rerum consequuntur eos labore
          explicabo accusantium error qui est cupiditate illo temporibus nemo
          aliquid, dolorem adipisci? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum in animi vel perspiciatis placeat velit sunt
          consectetur, non rerum consequuntur eos labore explicabo accusantium
          error qui est cupiditate illo temporibus nemo aliquid, dolorem
          adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum in animi vel perspiciatis placeat velit sunt consectetur, non
          rerum consequuntur eos labore explicabo accusantium error qui est
          cupiditate illo temporibus nemo aliquid, dolorem adipisci? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorum in animi vel
          perspiciatis placeat velit sunt consectetur, non rerum consequuntur
          eos labore explicabo accusantium error qui est cupiditate illo
          temporibus nemo aliquid, dolorem adipisci? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum in animi vel perspiciatis
          placeat velit sunt consectetur, non rerum consequuntur eos labore
          explicabo accusantium error qui est cupiditate illo temporibus nemo
          aliquid, dolorem adipisci? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum in animi vel perspiciatis placeat velit sunt
          consectetur, non rerum consequuntur eos labore explicabo accusantium
          error qui est cupiditate illo temporibus nemo aliquid, dolorem
          adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum in animi vel perspiciatis placeat velit sunt consectetur, non
          rerum consequuntur eos labore explicabo accusantium error qui est
          cupiditate illo temporibus nemo aliquid, dolorem adipisci? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorum in animi vel
          perspiciatis placeat velit sunt consectetur, non rerum consequuntur
          eos labore explicabo accusantium error qui est cupiditate illo
          temporibus nemo aliquid, dolorem adipisci? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum in animi vel perspiciatis
          placeat velit sunt consectetur, non rerum consequuntur eos labore
          explicabo accusantium error qui est cupiditate illo temporibus nemo
          aliquid, dolorem adipisci? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum in animi vel perspiciatis placeat velit sunt
          consectetur, non rerum consequuntur eos labore explicabo accusantium
          error qui est cupiditate illo temporibus nemo aliquid, dolorem
          adipisci?
        </p>
      </div>
    </div>
  );
};
