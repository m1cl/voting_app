window.Data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: 'Tom Diabo',
      description: 'Girl',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/daniel.jpg',
      product_image_url: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Andi Arroganti',
      description: 'Benzin in Berlin',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/kristy.png',
      product_image_url: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'The Go Gos',
      description: 'Vacation',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/veronika.jpg',
      product_image_url: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Marduk',
      description: 'Baptism on Fire',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/molly.png',
      product_image_url: 'images/products/image-yellow.png',
    },
  ];

  return data;
})();
