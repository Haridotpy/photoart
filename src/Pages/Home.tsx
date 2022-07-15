import { useState } from "react";
import "../App.css";
import { withDragAndDrop, Box, Header } from "../Components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faImage } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const [file, setFile] = useState<File | null>(null);
	const navigate = useNavigate();

	const handleFileChange = (files: FileList) => {
		if (!files || files.length <= 0) return setFile(null);
		const file = files[0];
		setFile(file);
	};

	const DragAndDrop = withDragAndDrop(Box, handleFileChange);

	return (
		<section id="Home">
			<div className="container">
				<Header />
				<form className="form">
					<DragAndDrop>
						<span>Drag And Drop Files Here or Click</span>
						<FontAwesomeIcon icon={faImage} size="2x" />
					</DragAndDrop>
					<Box onClick={() => navigate("/new-picture")}>
						<span>Take New Picture</span>
						<FontAwesomeIcon icon={faCamera} size="2x" />
					</Box>
				</form>
				{file && <img src={URL.createObjectURL(file)} alt={file.name} />}
			</div>
		</section>
	);
};

export default Home;