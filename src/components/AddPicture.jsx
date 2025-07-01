import { PhotoIcon2 } from "../icons";

function AddPicture(props) {
  const { file, setFile } = props;

  const hdlFileChange = (e) => {
    console.dir(e.target.value);
    console.dir(e.target.files);
    setFile(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div
        className="bg-gray-800 min-h-40 relative cursor-pointer hover:bg-black"
        onClick={() => document.getElementById("input-file").click()}
      >
        <input
          type="file"
          className="hidden"
          id="input-file"
          onChange={hdlFileChange}
        />
        {file && (
          <img
            src={URL.createObjectURL(file)}
            className="h-full block mx-auto"
          />
        )}
        {!file && (
          <PhotoIcon2 className="w-15 absolute top-5 right-1/2 translate-1/2 opacity-60" />
        )}
      </div>
    </div>
  );
}
export default AddPicture;
