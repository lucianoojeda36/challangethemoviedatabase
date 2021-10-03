import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {apiKey_nomada} from '../../api/config'
import { getDataMovieDb } from "../../store/datamoviedb/DataMovieDb.action";
import { useHistory } from "react-router-dom";

interface dataInfo {
  file: any;
  [x: string]: any;
}

export default function DragAndDrop() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: false,
    action: "https://whois.nomada.cloud/upload",
    headers: {
      Nomada: apiKey_nomada,
    },
    onChange(info: dataInfo) {

      dispatch(getDataMovieDb(info.file.response?.actorName));

      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message
          .success(`${info.file.name} file uploaded successfully.`)
          .then(() => {
            history.push("/DashBoard");
          });
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <h1>¿Quien es este actor?</h1>
      <Dragger {...props} className="container-dragdrop">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}
