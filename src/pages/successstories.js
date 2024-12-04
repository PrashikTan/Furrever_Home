import "../styles/successstories.css";

const successstories = () => {
  const stories = [
    {
      id: 1,
      title: "Bruno Finds His Forever Home",
      description:
        "After spending months in the shelter, Bruno has found a loving home with the Patel family. He's now enjoying long walks, belly rubs, and endless treats!",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Mittens' New Adventure",
      description:
        "Mittens was rescued and adopted by Emma, who absolutely adores her. She now has a cozy spot by the window and a loving family to care for her.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Buddy's Big Break",
      description:
        "Buddy, a playful Labrador, was adopted by a family who loves his boundless energy. He's enjoying his new backyard and playtime with the kids.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="success-stories-container">
      <h1>Success Stories</h1>
      <div className="stories-grid">
        {stories.map((story) => (
          <div className="story-card" key={story.id}>
            <img src={story.image} alt={story.title} />
            <h2>{story.title}</h2>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default successstories;
