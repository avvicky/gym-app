import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/client";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl =
        "https://zylalabs.com/api/392/exercise+database+api/1004/exercise+by+id&id=";

      const youtubeSearchUrl =
        "https://zylalabs.com/api/948/youtube+search+api/769/fetch+youtube+videos?q=";

      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}${exerciseDetailData.name}`,
        exerciseOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(
        `https://zylalabs.com/api/392/exercise+database+api/311/list+of+target+muscle&target=${exerciseDetailData.target}`,
        exerciseOptions
      );

      setTargetMuscleExercises(targetMuscleExerciseData);
    };
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} />
    </Box>
  );
};

export default ExerciseDetail;
