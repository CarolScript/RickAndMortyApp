import { useEffect, useState } from "react";

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchCharacters = async (reset = false) => {
    try {
      setLoading(true);

      const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Erro ao carregar");

      const data = await res.json();

      setCharacters((prev) => (reset ? data.results : [...prev, ...data.results]));
      setError(null);

    } catch (err) {
      setError(err.message);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(true);
  }, [search]);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const reload = () => {
    setPage(1);
    fetchCharacters(true);
  };

  return { characters, loading, error, search, setSearch, setPage, reload };
}
