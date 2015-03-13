using NUnit.Framework;
using System;

namespace CodeRetreatTests
{
	[TestFixture ()]
	public class EmptyTests
	{
		[Test ()]
		public void SuccessTest ()
		{
			Assert.IsTrue (true);
		}

		[Test]
		public void FailTest()
		{
			Assert.IsFalse (true);
		}
	}
}

