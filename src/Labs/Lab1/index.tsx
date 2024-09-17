import React from "react";

export default function Lab1() {
  return (

    <><h4 id="wd-dropdowns">Dropdowns</h4><h5>Select one</h5><label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br /><select id="wd-select-one-genre">
      <option value="COMEDY">Comedy</option>
      <option value="DRAMA">Drama</option>
      <option selected value="SCIFI">
        Science Fiction</option>
      <option value="FANTASY">Fantasy</option>
    </select><h5>Select many</h5><label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br /><select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select></>

  );
}