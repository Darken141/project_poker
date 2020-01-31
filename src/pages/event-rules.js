import React from 'react';

import backgroundImage from '../images/vip.webp';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const EventRulesPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Event Rules" />
			<h1 className="mb-30">General Rules</h1>

			<h2 className="mb-20">1.Penalties and Player etiquette</h2>
			<p className="center">Players are expected to maintain a reasonable level of decorum at all times.</p>
			<h3 className="mb-20">Disclosure</h3>
			<p>
				Players are obligated to protect the other players at all times. Therefore, whether in a hand or not,
				players may not:
			</p>
			<ul className="ml-40 mb-30">
				<li>Disclose contents of live or folded hands.</li>
				<li>Advise or criticize play before the action is completed.</li>
				<li>​ Read a hand that hasn’t been tabled.</li>
				<li>Discuss hands or strategy with any spectator.</li>
				<li>Seek or receive consultation from an outside source.</li>
				<li>The one-player-to-a-hand rule will be enforced.</li>
			</ul>

			<h3 className="mb-20">Exposing and Mucking</h3>

			<p>
				​ Players who show their cards to a player who has already folded and then fold their cards themselves
				may receive a penalty. Dealers upon seeing this are instructed to hold those cards outside of the muck
				and show them to the entire table when the hand is completed. Players doing this repeatedly will be
				penalized. ​
			</p>

			<h3 className="mb-20">Collusion</h3>

			<p>
				Collusion, or suspected collusion, of any form, will not be tolerated and immediate action will be
				taken.
			</p>

			<h3 className="mb-20">Etiquette Violations</h3>
			<p>
				Repeated etiquette violations will result in penalties assessed by the staff. Examples include, but are
				not limited to, unnecessarily touching other players’ cards or chips, delay of the game, repeatedly
				acting out of turn, splashing chips, intentionally betting out of reach of the dealer, or excessive
				chatter. In addition, excessive celebration through extended theatrics, inappropriate behavior, or
				physical actions, gestures, or conduct may be penalized. These violations also include abusive behavior
				towards other players’ playing styles and/or berating players for how they have played or are playing
				the game.
			</p>

			<h3 className="mb-20">Foul Language</h3>
			<p>
				The abuse of other players, venue staff or other personnel will not be tolerated. Foul, obscene or
				offensive language directed at any player or staff member may result in a penalty. Repeated non-directed
				foul, obscene or offensive language may also result in a penalty.
			</p>
			<p>
				All participants must behave in a courteous and civil manner during all games and in gaming areas. Any
				individual who encounters inappropriate behavior on the part of another individual should immediately
				contact the staff. This shall include, but is not limited to, any player whose personal hygiene or
				health has become disruptive to the other players seated at their table. The determination as to whether
				an individual’s personal hygiene or health is disruptive to other players shall be determined by the
				staff which may, in its discretion, implement sanctions upon any such player who refuses to remedy the
				situation in a satisfactory manner.{' '}
			</p>
			<p>
				Any player who intentionally breaks, rips, or defaces cards will be dealt out immediately. Should the
				player feel they were dealt out unfairly; the issue must be raised with the staff immediately.
			</p>
			<p className="center">Management decision is final.</p>

			<h2 className="mb-20">2.Rules of play - The buy-in ​</h2>

			<ul className="ml-40 mb-30">
				<li>A new player must make a full buy-in for that particular game, usually 50 times the Big Blind.</li>
				<li>An existing player is allowed to re-buy once for half of a full buy-in.</li>
				<li>
					​If the limit is increased in an existing game, thereby increasing the buy-in, existing players are
					grandfathered; they may play the chips they have on the table at that time. Thereafter, the
					increased buy-in applies to all players.
				</li>
				<li>
					A player forced to transfer from a must-move game to a game of the same limit may continue to play
					the same amount of money, even if it is less than the minimum buy-in. A player who voluntarily
					changes games or comes from a broken game must buy-in for at least the minimum buy-in amount.
				</li>
			</ul>

			<h2 className="mb-20">3. Rules of play - Blinds ​</h2>

			<ul className="ml-40 mb-30">
				<li>
					Players may ‘buy the button’. A new player or a player with a missed blind button may enter the game
					in the small blind position by posting both blinds. The big blind amount plays. On that hand, the
					dealer button is on the player’s immediate right, and no one else posts blinds. On the subsequent
					hand, the player who ‘bought the button’ gets the dealer button and the blinds resume as usual.
				</li>
				<li>
					All blinds are ‘live’. The money plays, and the players posting blinds have the option to raise
					before the flop (unless the betting is already capped).
				</li>
				<li>
					Players may ‘straddle’ in the games when they are one position to the left of the big blind. All
					straddles are double the big blind and are live. Only one straddle per hand is permitted.
				</li>
				<li>
					A player who misses both blinds must post an amount equal to the sum of the blinds. The excess
					amount, over the big blind, becomes dead money and is not part of the bet. An owed small blind will
					be dead money. The only exception is if a player chooses to come in on a straddle. In this
					situation, they will not be required to post the small blind. Buying the button is allowed.
				</li>
				<li>
					Missing the blinds in the first round of a new game is exactly the same as missing the blinds in a
					pre-existing game. ‘Running it twice’ is allowed on all tables, if all involved players agree.
				</li>
				<li>
					Should only the players involved in a side pot wish to run it twice, they may do so for the side pot
					only (the main pot will always go to the winner of the first board).
				</li>
			</ul>

			<h2 className="mb-20">4.Seating and table changes</h2>

			<p> ​In all new games, players will draw for the dealer button.</p>
			<p>
				When a new game starts, players on the waiting list will be seated first. Players may lock up seats on a
				first come, first served basis as they arrive at the table.
			</p>

			<h3 className="mb-20">Seat changes within a game:</h3>

			<ul className="ml-40 mb-30">
				<li>
					A player who moves away from the blinds (clockwise) must wait the number of hands corresponding to
					the number of positions moved, or post a big blind, before being dealt in again. ​
				</li>
				<li>
					A player who ‘deals off’ (by playing a hand on the dealer button and then changing seats) can move
					and wait for the blinds to pass the new seat once and re-enter the game behind the button without
					posting blinds.
				</li>
				<li>
					If a player with a missed blind button changes seats, they must post both blinds, or the player must
					wait for the big blind.
				</li>
				<li>
					If an open seat, is wanted by more than one player and they cannot resolve the issue, priority will
					go to whoever has been in the game longest. If that cannot be determined, priority will go to
					whoever asked first. If that cannot be determined, the players will draw cards for the seat.
				</li>
				<li>
					When a seat opens in a game with a waiting list, the floor person will ask the seated players if
					anyone wants the seat before locking it up for the new player. Once chips are placed on the table,
					the new player cannot be compelled to move to another seat.
				</li>
				<li>
					A player moving to a different game must have the full buy-in for that game unless he/she is from a
					broken game and cannot get a seat at the same limit. The game limit must be equal to or lower than
					the broken game to enter with a short buy-in.
				</li>
				<li>
					If a player is forced to change tables for whatever reason, it is not required that they post the
					blinds and instead can choose to wait for the button to pass.
				</li>
				<li>
					Players who quit a game and return to the same game in less than three hours must return with at
					least the same value in chips as when they quit, but not less than the minimum buy-in. ​
				</li>
				<li>
					In fairness to all players, if a player in a short game (fewer than five players) requests a seat in
					another game, the floor person may ask if all players desire to draw cards for the available
					seat(s).
				</li>
				<li>
					In a game with five or less players, a player who causes a game to break by refusing to ante or take
					the blinds will not be allowed to draw for a seat in another game. ​
				</li>
			</ul>
			<h3 className="mb-20">Third Man Walking</h3>
			<p>
				The third man walking will be any player who gets up from their seat in a cash game after two other
				players are already away from the table. This player will be required to return to their seat within one
				orbit or else their seat in the game will be forfeited if there is a waiting list for the game.
			</p>

			<h3 className="mb-20">​When a game breaks and there are:</h3>

			<ul className="ml-40 mb-30">
				<li>
					Insufficient open seats in other games of the same limit to accommodate all players, the players
					will draw cards for the open seat(s). The floor person will draw cards for absent players who have
					no missed-blind buttons or hold buttons.
				</li>
				<li>
					Sufficient open seats in other games of the same limit to accommodate all players, all missed blind
					buttons accumulated by lobbying players in the broken game will be transferred to the existing game.
				</li>
			</ul>

			<p>All table changes must be pre-approved by a floor person.</p>
			<p>
				Table changes and game changes must be made immediately. This includes players not playing all the
				remaining hands until the big blind comes around. However, players in the blinds may finish playing the
				blinds and their button.
			</p>
		</Layout>
	</React.Fragment>
);

export default EventRulesPage;
