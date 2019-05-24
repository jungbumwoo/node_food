import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
  // eslint-disable-next-line import/no-unresolved
} from "../controllers/videoController";
import {
  uploadVideo
} from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//  Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//  Delte Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;