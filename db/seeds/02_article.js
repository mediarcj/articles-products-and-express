exports.seed = function (knex, Promise) {
    return knex('articles').del()
      .then(function () {
        return knex('articles').insert([
          { title: 'Boat Fishing', 
            author: 'John Doe', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est consequuntur, tempore autem earum aliquid perferendis nihil adipisci, labore voluptatum id voluptatem. Incidunt sequi accusantium aut? Ut placeat sequi blanditiis! Tempore, voluptas dicta hic exercitationem eaque voluptates necessitatibus delectus, possimus error deserunt nostrum voluptatibus quod. Est, corrupti tenetur. Ab adipisci eligendi, hic porro in consectetur ut. Laborum nisi odio eius, aperiam eveniet vero repudiandae et facilis nulla reprehenderit, aliquam quis labore fugit, veniam similique minima eaque quibusdam praesentium id optio mollitia.', 
            urltitle: 'boat%20fishing' },
          { title: 'Ahi Tuna', 
            author: 'Michael Jordan', 
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate error aliquid aliquam dicta repellat et deserunt exercitationem laudantium cum iusto, cumque vero eos accusamus illum fuga sapiente quam harum id est, dolore aut! Sint reiciendis quasi nihil, aliquid quia culpa.', 
            urltitle: 'ahi%20tuna' },
          { title: 'Fish Big Game', 
            author: 'Kobe Bryant', 
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab minima tenetur sint amet, tempore esse saepe molestiae ad et perferendis. Sequi voluptatibus nam at deleniti esse, labore ipsum nihil dolores. Nobis sunt dolorum illum, fugiat explicabo adipisci laudantium culpa quam nulla praesentium earum eveniet totam dolores asperiores at possimus soluta natus aliquam officia quibusdam mollitia aspernatur est! Corrupti doloribus possimus odio harum modi aspernatur reprehenderit adipisci, quae obcaecati dicta sint animi impedit facere unde voluptatum iste vero! Sed tenetur obcaecati inventore cum a? Exercitationem sed beatae modi distinctio ex magnam dolore commodi earum, voluptatem ullam corrupti sunt consectetur! Cum odit pariatur iste sequi, corrupti culpa impedit illo nam accusamus recusandae at aliquid inventore magni qui autem ratione, deserunt placeat?', 
            urltitle: 'fish%20big%20game' }
        ]);
      });
  };
  