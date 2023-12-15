import React from "react";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="user-profile">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="my-5">
              <h3>My Profile</h3>
              <hr />
            </div>
            <form class="file-upload">
              <div class="row mb-5 gx-5">
                <div class="col-xxl-8 mb-5 mb-xxl-0">
                  <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                      <h4 class="mb-4 mt-0">Contact detail</h4>

                      <div class="col-md-6">
                        <label class="form-label">First Name *</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="First name"
                          value="Chien"
                        />
                      </div>

                      <div class="col-md-6">
                        <label class="form-label">Last Name *</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Last name"
                          value="Le Minh"
                        />
                      </div>

                      <div class="col-md-6">
                        <label class="form-label">Phone number *</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="0934964297"
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          value="user1@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4">
                  <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                      <h4 class="mb-4 mt-0">Upload your profile photo</h4>
                      <div class="text-center">
                        <div class="square position-relative display-2 mb-3">
                          <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                        </div>

                        <input
                          type="file"
                          id="customFile"
                          name="file"
                          hidden=""
                        />
                        <label
                          class="btn btn-success-soft btn-block"
                          for="customFile"
                        >
                          Upload
                        </label>
                        <button type="button" class="btn btn-danger-soft">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-5 gx-5">
                <div class="col-xxl-6">
                  <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                      <h4 class="my-4">Change Password</h4>

                      <div class="col-md-6">
                        <label for="exampleInputPassword1" class="form-label">
                          Old password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="exampleInputPassword2" class="form-label">
                          New password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>

                      <div class="col-md-12">
                        <label for="exampleInputPassword3" class="form-label">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gap-3 d-md-flex justify-content-md-end text-center">
                <button type="button" class="btn btn-danger btn-lg">
                  Delete profile
                </button>
                <button type="button" class="btn btn-primary btn-lg">
                  Update profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
