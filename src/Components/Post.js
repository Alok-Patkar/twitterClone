import React from "react";
import { FaComment, FaHeart, FaLeaf, FaRegCheckCircle } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";

const Post = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/image/developer.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Umesh Patel</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @umeshpatel12 <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eius ut.
          Corporis totam esse modi minima, culpa nam beatae explicabo laborum
          temporibus aliquam velit nulla tenetur veritatis sed facilis officiis
          ullam sit impedit fugit consequuntur. Consectetur velit doloribus nemo
          inventore officiis eveniet non aliquid, dolorum et ratione architecto,
          consequuntur quaerat!
        </div>
        <div className="post__details__img">
          <img src="/image/indianteam.jpg" alt="" />
        </div>
        <div className="reaction">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <RiArrowUpDownFill className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
