import { useEffect, useState } from "react";
import "./style.css";

const Card = ({ imagesUrl, title, artist, track, onSelectTrack }) => {
  //   const [selectedTracks, setSelectedTracks] = useState([]);
  //   const [combinedTracks, setCombinedTracks] = useState([]);

  //   const handleSelectTrack = (track) => {
  //     const alreadySelected = selectedTracks.find((t) => t.id === track.id);
  //     if (alreadySelected) {
  //       setSelectedTracks(selectedTracks.filter((t) => t.id !== track.id));
  //     } else {
  //       setSelectedTracks([...selectedTracks, track]);
  //     }
  //   };

  //   useEffect(() => {
  //     const combinedTracksWithSelectedTrack = tracks.map((track) => ({
  //       ...track,
  //       isSelected: selectedTracks.find((t) => t.id === track.id),
  //     }));
  //     setCombinedTracks(combinedTracksWithSelectedTrack);
  //   }, [selectedTracks, tracks]);

  return (
    <div className="card__wrapper">
      <div className="card__images">
        <img src={imagesUrl} alt={title} className="card__image" />
      </div>
      <div className="card__info">
        <h5>{title}</h5>
        <p>{artist}</p>
      </div>
      <div className="button__wrapper">
        <button onClick={() => onSelectTrack(track)} className="card__button">
          {false ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Card;
