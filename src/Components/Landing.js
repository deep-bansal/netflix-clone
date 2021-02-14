import React, { Fragment } from "react";

function Landing(props) {
  return (
    <Fragment>
      <div className="landing">
        <h1 id="logo">NETFLIX</h1>
        <button type="button" class="btn btn-danger">
          Sign in
        </button>
        <h1 id="content">
          Unlimited movies, TV
          <br></br>
          shows and more.
        </h1>
        <h4 className="margin">Watch anywhere. Cancel anytime.</h4>
        <h5 className="margin">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Email address" />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="section-two sections">
        <div className="details">
          <h1>Enjoy on your TV.</h1>
          <h5>
            Watch on smart TVs, PlayStation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players and <br />
            more.
          </h5>
        </div>
        <div className="image">
          <img src="https://images.squarespace-cdn.com/content/v1/59317e12e58c620c430469b9/1496871180465-1NG8NRNZ71YV8F8LJ4BF/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIFbyG1bnTu2n2cGYUv9pFL8WtEMIRp8edI1V1pz5mx5E/image-asset.gif" />
        </div>
      </div>
      <div className="section-three sections">
        <div className="image">
          <img src="https://9to5mac.com/wp-content/uploads/sites/6/2019/02/netflix-smart-downloads.jpg?quality=82&strip=all" />
        </div>
        <div className="details">
          <h1>Watch everywhere.</h1>
          <h5>
            Stream unlimited movies and TV shows on
            <br />
            your phone, tablet, laptop, and TV.
          </h5>
        </div>
      </div>
      <div className="section-four sections">
        <h1>Frequently Asked Questions</h1>
        <ul class="list-group">
          <li class="list-group-item list-group-item-action list-group-item-success">
            What is Netflix? <i class="fas fa-plus"></i>
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            How much does Netflix cost? <i class="fas fa-plus"></i>
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            Where can I watch? <i class="fas fa-plus"></i>
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            How do I cancel? <i class="fas fa-plus"></i>
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            What can I watch on Netflix? <i class="fas fa-plus"></i>
          </li>
        </ul>
        <h5 className="margin">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Email address" />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Get Started
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Landing;
