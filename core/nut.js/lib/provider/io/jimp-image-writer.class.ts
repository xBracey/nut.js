import {
  ImageWriter,
  ImageWriterParameters,
} from "@nut-tree-macpad/provider-interfaces";
import { imageToJimp } from "@nut-tree-macpad/shared";

export default class implements ImageWriter {
  store(parameters: ImageWriterParameters): Promise<void> {
    return new Promise((resolve, reject) => {
      const jimpImage = imageToJimp(parameters.image);
      jimpImage
        .writeAsync(parameters.path)
        .then((_) => resolve())
        .catch((err) => reject(err));
    });
  }
}
