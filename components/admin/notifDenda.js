//@ts-check
import useSWR from 'swr'

export default function dashboard() {
    async function fetcher(url) {
        const res = await fetch(url);
        return res.json();
    }
    const url = 'http://localhost:3000/api/tb_denda_notifikasi';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
      return <div>error......</div>
    }
    if (!data) {
      return <div>loading......</div>
    }
    return(
        <>
        <p id="notifDenda">Jumlah Denda yang belum dibayar : {data.length}</p>
        </>
    )
}