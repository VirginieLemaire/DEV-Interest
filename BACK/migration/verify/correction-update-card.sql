-- Verify devinterest:correction-update-card on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM update_card(	'{"language_id":"2"}'::json) WHERE false;

ROLLBACK;
