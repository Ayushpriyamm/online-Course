import { pr } from "../assests";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../redux/user/userSlice";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const userName =
    currentUser?.user?.name ||
    currentUser?.newUser?.name ||
    currentUser?.existingUser.name ||
    "Guest";

  const userAvatar = currentUser?.user?.avatar || "default-avatar-url";

  const userEmail = currentUser?.user?.email || "default-avatar-url";

  const memberSince = currentUser?.user?.createdAt || Date.now;

  const handleSignOut = async () => {
    try {
      dispatch(signoutStart());

      const res = await fetch("http://localhost:8000/api/v1/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are sent
      });

      const data = await res.json().catch(() => null);

      if (!data || !res.ok || !data.success) {
        dispatch(signoutFailure(data?.message || "Failed to sign out"));
        return;
      }

      dispatch(signoutSuccess());
      navigate("/");
    } catch (error) {
      console.error("Signout error:", error);
      dispatch(
        signoutFailure(error.message || "An error occurred during signout")
      );
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-16 items-end mx-auto w-[95%] sm:w-[90%] h-auto m-10">
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-32 bg-gradient-to-br from-orange-500 to-orange-100">
          <div className="absolute -bottom-16 left-8">
            <img
              src={userAvatar}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userName}</h1>
              <p className="text-gray-600">{userEmail}</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since {formatDate(memberSince)}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Enrolled Courses</h2>
              {user?.enrolledCourse?.length > 0 ? (
                <ul className="space-y-3">
                  {user.enrolledCourse.map((course, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{course.title}</span>
                      <div className="w-32">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${course.progress || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No courses enrolled yet</p>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Account Details</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-500">Role</label>
                  <p className="capitalize">{user?.role}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Account ID</label>
                  <p className="font-mono text-sm">{user?._id}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Last Updated</label>
                  <p>{formatDate(user?.updatedAt)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">
              Course Progress Overview
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              {user?.enrolledCourse?.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Overall Progress</span>
                    <span>
                      {Math.round(
                        user.enrolledCourse.reduce(
                          (acc, course) => acc + (course.progress || 0),
                          0
                        ) / user.enrolledCourse.length
                      )}
                      %
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-orange-500 rounded-full"
                      style={{
                        width: `${Math.round(
                          user.enrolledCourse.reduce(
                            (acc, course) => acc + (course.progress || 0),
                            0
                          ) / user.enrolledCourse.length
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">
                  Enroll in courses to track your progress
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
