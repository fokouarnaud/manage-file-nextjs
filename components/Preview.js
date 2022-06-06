 const Preview = ({ files }) => {
    if (!files.length) {
        return null
    }
    const apiEndPoint = "https://express-doc.herokuapp.com/";

    return files.map((file) => <img
        style={{ maxWidth: '200px' }}
        src={`${apiEndPoint}${file.filename}`}
        alt={file.originalname} />);
};
export default Preview;