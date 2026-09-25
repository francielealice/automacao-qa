type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const baseUrl = "https://jsonplaceholder.typicode.com";

// GET /posts
async function buscarPosts(): Promise<Post[]> {
  const res = await fetch(`${baseUrl}/posts`);

  console.log("GET /posts");
  console.log("Status:", res.status);

  const posts = (await res.json()) as Post[];

  console.log("Primeiro post:", posts[0]);

  return posts;
}

// GET /posts/1
async function buscarPostPorId(id: number): Promise<Post> {
  const res = await fetch(`${baseUrl}/posts/${id}`);

  console.log("\nGET /posts/1");
  console.log("Status:", res.status);

  const post = (await res.json()) as Post;

  console.log("Post:", post);

  return post;
}

// GET /posts/1/comments
async function buscarComentarios(id: number) {
  const res = await fetch(`${baseUrl}/posts/${id}/comments`);

  console.log("\nGET /posts/1/comments");
  console.log("Status:", res.status);

  const comentarios = await res.json();

  console.log("Primeiro comentário:", comentarios[0]);

  return comentarios;
}

// POST /posts
async function criarPost(): Promise<Post> {
  const corpoEnviado = {
    userId: 1,
    title: "Minha primeira postagem",
    body: "Aqui existe uma descrição",
  };

  const res = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(corpoEnviado),
  });

  console.log("\nPOST /posts");
  console.log("Status:", res.status);
  console.log("Corpo enviado:", corpoEnviado);

  const postCriado = (await res.json()) as Post;

  console.log("Post criado:", postCriado);

  return postCriado;
}

// Executando as quatro chamadas da atividade

await buscarPosts();

await buscarPostPorId(1);

await buscarComentarios(1);

await criarPost(); 