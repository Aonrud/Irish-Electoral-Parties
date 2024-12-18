# Timeline of Electoral Parties in the Republic of Ireland

[View the timeline at https://aonrud.github.io/Irish-Electoral-Parties/](https://aonrud.github.io/Irish-Electoral-Parties/)

[![A screenshot of the Timeline of Electoral Parties in the Republic of Ireland](https://aonrud.github.io/Irish-Electoral-Parties/electoral_parties.png)](https://aonrud.github.io/Irish-Electoral-Parties/)

This is the source repository for the diagram.

## Parties

### Party inclusion criteria

Parties are included if:

1. they have held seats at local or Oireachtas level in the Republic of Ireland, including by defection/formation by representatives elected for another party;
2. they have at some point in their existence stood candidates for election, including where those candidates were officially 'Independent' due to lack of registration but were known to be running under the party banner.

### Data

The party information is collated in [`docs/parties.csv`](docs/parties.csv). The diagram draws its information directly from this file, and will include an information box when an entry is clicked if a Wikipedia link is included.

The CSV file has these headings. Every entry has to have at least id, name, and start filled in.

|Heading|value|
|-------|-----|
|id|A unique ID.|
|name|The party's name.|
|start|The year of foundation (four digit number).|
|end|The year of dissolution (four digit number).|
|endEstimate|If `true`, the dissolution date is an estimate and shows differently on the diagram. Otherwise it can be left blank.|
|become|The ID of another party which this party 'became'. E.g. when a party changed its name, the entry for the old name will have the ID of the new party name here.|
|split|The ID of another party which this entry split from.|
|merge|The ID of another party which this entry merged into.|
|links|The IDs of other parties, separated by a space, which this party has some link to (this covers all informal and other relationships that aren't a split or merge.|
|colour|The party colour, used to outline the name and colour diagram lines connecting it. This can be any [valid CSS colour value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
|wikipedia|The URL of the Wikipedia page for this party, if it has one. This is used to automatically create a brief summary when clicking/touching the party name in the diagram.|

## Events

The dates of elections or specific events in a party's history can also be added to the timeline.

Events are listed in [`docs/events.csv`](docs/events.csv) – the diagram reads these when loaded. Events can be associated with just a date, in which case they appear along the date line at the top of the diagram; or with a specific party and date, in which case they appear as a circle on that party's timeline. If an event relates to a specific party, its ID (as specified in `docs/parties.csv`) is listed in the `target` column.

|Heading|value|
|-------|-----|
|year|The year of the event|
|content|The text of the event|
|target|The ID of a party, if the event is specific to one|
|colour|A colour used to categorise the event (for example, all general elections are marked with the same colour). This can be any [valid CSS colour value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|

## Contributing

Any additions or corrections are welcome. If you are familiar with Github, please feel free to [create an issue](https://github.com/Aonrud/Irish-Electoral-Parties/issues) or send a [pull request](https://github.com/Aonrud/Irish-Electoral-Parties/pulls).

If you are not familiar with using Github, you can also email me directly at [aonrud@fastmail.com](mailto:aonrud@fastmail.com).

**Notes:**

* Please make sure to include a source or reference if suggesting a party for inclusion that isn't easily verified.
* Each party has an ID. This can be anything, so long as it's unique and starts with a letter. Usually the initials will do, unless they are shared with another party.

## Contributors

Thanks to the following people for providing additions and corrections to the timeline: Alan Kinsella, John Goodwillie, Paul Cullotty.

* * *

## Licence

Copyright (C) 2023-4 Aonghus Storey

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

See the [`LICENCE`](LICENCE) file for details.
