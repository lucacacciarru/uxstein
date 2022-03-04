## Documentazione

##### react-grid-layout

## Installazione:

- npm i react-grid-layout

Nel caso ci si trovi in ambiente typescript, è possibile ottenere i tipi con

- npm i @types/react-grid-layout

## Setup

- Per prima cosa importiamo i seguenti moduli:

import RGL, { WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

- e inizializziamo in questo modo:
  const ReactGridLayout = WidthProvider(RGL);

- andremo poi a renderizzare il componente griglia:
  <ReactGridLayout />
  applicando ad esso le prop che ci permettono di impostarlo

- come children di questo componente, in seguito inseriremo il map del nostro stato di layout

## Impostazione di <ReactGridLayout />

- per quanto riguarda lo stile possiamo procedere come al solito, usando dei className e dei moduli, degli stili globali, tramite stile inline ecc.
  di seguito le prop che ci consentono di settare le impostazioni di base:
- cols: number -> numero di colonne nel layout
- rowHeight: number -> l'altezza delle righe è statica, ma è possibile modificarla in base ai breakpoint
- maxRows: number -> nonostante sia presente questa funzione, viene dichiarato in modo esplicito che non ha piena funzionalità: il suo scopo
  pare sia quello di impedire il drag/resize di un blocco oltre il numero specificato. Se però si fa il drag/resize di un blocco vicino, non sarà impedito che questo venga spinto fuori
- isResizable: boolean -> permette di abilitare/disabilitare il resize dei childrens
- layout: Layout[] -> accetta un array di Layout, un oggetto fatto in questo modo: { i: string, x: number, y: number, w: number, h: number, ...}
  viene consigliato di usare "i" per le keys quando si farà il map
- onDrop: (newLayout: GridLayout.Layout[], newBlock: Layout, event: Event) -> funzione triggerata al drop di un elemento
- droppingItem: accetta un oggetto {i: string, w: number, h: number} -> il suo scopo è quello di configurare il "droppingElement" ossia
  quell'elemento virtuale che compare quando draggi un elemento dal di fuori. Si riferisce a qualsiasi elemento viene draggato all'interno,
  perciò nel caso in cui si abbiano blocchi con diverse dimensioni di default sarà utile associare questo valore ad uno state
- isDroppable: se true, gli elementi con draggable={true} possono essere droppati nella griglia.
