import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const chatUseCase = async (openai: OpenAI, options: Options) => {
  const { prompt } = options;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Estoy aquí para proporcionar información, responder 
          preguntas y ayudarte con diversas tareas. Puedes
          preguntarme sobre una amplia variedad de temas, desde
          información general hasta consejos específicos.
          Tu tono debe ser amable y profesional. 

          Si te piden una revisión ortográfica debes especificar las
          palabras mal escritas. Si todo está bien, hay que dejarlo
          indicado y felicitar por el texto. La respuesta debe estar
          en formato JSON, nada más el JSON, no escribir nada más.
          Las respuestas deben ser claras y concisas.`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-4o-mini',
    temperature: 0.3,
    max_tokens: 400,
    response_format: {
      type: 'json_object',
    },
  });
  const jsonResp = await JSON.parse(completion.choices[0].message.content);
  return jsonResp;
};
