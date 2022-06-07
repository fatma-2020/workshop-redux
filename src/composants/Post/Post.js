import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deletePost, verifiedPost } from "../../JS/Actions/PostsAction";
import { Link, useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post Title
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Post content
        </Typography>
        <Typography variant="body2">
          {post.content}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>{dispatch(verifiedPost(post.id));console.log("x")}}>
          {post.isVerified? "Verified" : "not verified"}
        </Button>
        <Button size="small" onClick={() => dispatch(deletePost(post.id))}>
          Delete
        </Button>
        <Link to={`/editPost/${post.id}`}>
          <Button size="small">EDIT</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
