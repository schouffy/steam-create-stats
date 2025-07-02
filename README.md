# steam-create-stats

If you want to create many stats to your Steam game, this script will help make it faster.

For example: You want to track "start level X" and you have 200 levels in your game, you need to create 200 stats. Using the web interface it can be pretty a pretty annoying experience.

Steps:

- Go to your Steam stats page (ie https://partner.steamgames.com/apps/stats/YOURAPPID)
- open the browser console, enable multiline (Firefox has it, other browser probably as well), and paste the script from this repo
- update the script so it fits your needs and it creates the stats you want with the proper parameters. The current script will create a basic aggregated increment stat so if that's what you need, it'll be very easy
- execute the script; your rows should start to insert
- Check the rows before you publish!

I'm not responsible with any issue you might have running this script. Use at your own risk.
