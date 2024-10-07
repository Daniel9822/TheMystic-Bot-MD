

const handler = async (m, {text}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.owner_viewimage;
  s;
  if (!text) throw tradutor.texto1;
  const ext = text.split('.').pop();
  const path = `${text}`;
  if (!fs.existsSync(path)) throw tradutor.texto2;
  const media = await fs.readFileSync(path);
  const mimeType = `image/${ext}`;
  m.reply(media, null, {thumbnail: await (await fetch(`data:${mimeType};base64,${media.toString('base64')}`)).buffer()});
};

handler.help = ['viewimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(viewimage|vi)$/i;
handler.owner = true;

export default handler;
